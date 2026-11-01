export default async function Svg({ url }: { url: string }) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch SVG: ${response.status}`);
  }

  const svg = await response.text();

  return (
    <span
      className="flex h-full min-h-0 w-full min-w-0 items-center justify-center overflow-hidden [&>svg]:block [&>svg]:h-auto [&>svg]:max-h-full [&>svg]:w-full [&>svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
