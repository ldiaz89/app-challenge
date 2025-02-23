import { CarFeaturesProps } from "@/types";


export default function CarFeatures({ features }: CarFeaturesProps) {
  return (
    <div className="mt-8 self-center w-full md:w-[50%]">
      <div className="space-y-6 mt-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center p-4 rounded-lg gap-4 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="rounded-lg flex-shrink-0">
              <img
                src={feature.image}
                alt={feature.name}
                className="w-auto h-auto max-w-[250px] md:max-w-[300px] object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[20px] font-semibold leading-[27px] tracking-[-0.4px] font-[Montserrat]">
                {feature.name}
              </h3>

              <p className="text-[16px] font-normal leading-[27px] tracking-[-0.1px] font-[Montserrat] text-gray-600 mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
