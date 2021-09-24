// Fake users data
const templateStr = [{ temStr: "hello World" }];

export default function handler(req, res) {
  res.status(200).json(templateStr);
}
