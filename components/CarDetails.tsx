import { CarDetailsProps } from "@/types";


export default function CarDetails({
  photo,
  name,
  title,
  description,
}: CarDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-[80%] self-center">
      <div className="w-full md:w-1/2">
        <img
          src={photo}
          alt={name}
          className="w-full max-w-[600px] h-auto object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-[20px] font-semibold leading-[27px] tracking-[0px] font-montserrat">
          {name}
        </h1>

        <h2 className="text-[50px] font-semibold leading-[57px] tracking-[-1px] font-montserrat mt-4">
          {title}
        </h2>

        <div
          className="text-gray-600 mt-2 text-[16px] font-normal leading-[27px] tracking-[-0.1px] font-montserrat"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
