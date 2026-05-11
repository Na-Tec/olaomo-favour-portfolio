import { NextResponse } from 'next/server';

type ContactType = 'role' | 'speak' | 'collaborate' | 'hello';

type ContactPayload = {
  type: ContactType;
  name?: string;
  email?: string;
  company?: string;
  roleTitle?: string;
  message?: string;
  projectName?: string;
  eventDateSet?: string;
  format?: string;
  eventType?: string;
};

function buildTelegramMessage(payload: ContactPayload) {
  const typeLabel: Record<ContactType, string> = {
    role: 'Explore a Role',
    speak: 'Invite Me to Speak',
    collaborate: 'Collaborate on a Project',
    hello: 'Something Else',
  };

  const lines: string[] = [];
  lines.push('New Portfolio Contact');
  lines.push(`Type: ${typeLabel[payload.type]}`);
  lines.push(`Time (UTC): ${new Date().toISOString()}`);
  lines.push('');

  const add = (label: string, value?: string) => {
    const v = value?.trim();
    if (!v) return;
    lines.push(`${label}: ${v}`);
  };

  add('Name', payload.name);
  add('Email', payload.email);
  add('Company/Org', payload.company);
  add('Role Title', payload.roleTitle);
  add('Project', payload.projectName);
  add('Event Date Set', payload.eventDateSet);
  add('Format', payload.format);
  add('Event Type', payload.eventType);

  if (payload.message?.trim()) {
    lines.push('');
    lines.push('Message:');
    lines.push(payload.message.trim());
  }

  return lines.join('\n');
}

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Telegram send failed: ${res.status} ${res.statusText} ${body}`);
  }
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as ContactPayload;

    if (!payload?.type) {
      return NextResponse.json({ ok: false, error: 'Missing type' }, { status: 400 });
    }

    const allowed: ContactType[] = ['role', 'speak', 'collaborate', 'hello'];
    if (!allowed.includes(payload.type)) {
      return NextResponse.json({ ok: false, error: 'Invalid type' }, { status: 400 });
    }

    const message = buildTelegramMessage(payload);
    await sendTelegram(message);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

