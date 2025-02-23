import CarLists from "@/components/CarLists";

export default async function Home() {
  const res = await fetch("https://challenge.egodesign.dev/api/models/");
  const cars = await res.json();

  return (
    <div>
      <div className="flex flex-col justify-center mt-24 px-4 md:px-10">
        <h1 className="self-center mb-16 text-center text-5xl md:text-6xl font-bold leading-[57px] tracking-tighter">
          Descubrí todos los modelos
        </h1>

        <CarLists cars={cars} />
      </div>
    </div>
  );
}
