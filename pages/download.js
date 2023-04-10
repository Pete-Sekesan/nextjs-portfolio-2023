import { join } from 'path';
import { createReadStream } from 'fs';
import { sendFile } from 'micro';

export default async function handler(req, res) {
    const filePath = join(process.cwd(), 'public', 'assets', 'myf.png');
    const fileStream = createReadStream(filePath);
    await sendFile(res, 200, null, fileStream);
}
