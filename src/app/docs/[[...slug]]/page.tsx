// the double [] around the folder name allows you to access the route 'docs' as well as anything starting with docs
// if it was just [...slug] you wouldn't be able to access localhost/docs, only localhost/docs/...

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 3) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}, example{" "}
        {slug[2]}
      </h1>
    );
  } else if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
