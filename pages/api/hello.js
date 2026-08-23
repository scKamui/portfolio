// This small test endpoint confirms that Next.js API routes are working.
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
