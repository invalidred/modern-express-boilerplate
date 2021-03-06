// @flow

import express from 'express';
import type { $Request, $Response } from 'express';

const app = express();

app.use(express.static(`${__dirname}/../public`));

app.get('/', (req: $Request, res: $Response) => {
  res.send('Hello World!');
});

app.listen(process.argv[2], () =>
  console.log(`streams listening on ${process.argv[2]}`)
);
