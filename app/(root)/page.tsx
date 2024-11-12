import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Mikiale" },
      _id: 1,
      description: "This is a description",
      image:
        "https://www.google.com/imgres?q=Profile%20Image%20For%20boy&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F174615296%2Fphoto%2Fsmiling-young-african-american-male.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D6bvRhsAHY1YiocUGS7jQfcr1KaLU4l42M6RqNpmdYZs%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fboy-smiling-profile&docid=sNbOOMa26OxRtM&tbnid=bzXTyXyKJcrkvM&vet=12ahUKEwjcvr3ShdeJAxVm8LsIHSk4Aek4ChAzegQIYxAA..i&w=612&h=421&hcb=2&ved=2ahUKEwjcvr3ShdeJAxVm8LsIHSk4Aek4ChAzegQIYxAA",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startpus found</p>
          )}
        </ul>
      </section>
    </>
  );
}
