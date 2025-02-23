import React, { lazy } from "react";
import CarSlider from "@/components/CarSlider";
import CarDetails from "@/components/CarDetails";
import CarFeatures from "@/components/CarFeatures";
import { CarModel } from "@/types";

async function fetchCarModel(modelId: string): Promise<CarModel | null> {
  try {
    const response = await fetch(
      `https://challenge.egodesign.dev/api/models/${modelId}/`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching car model: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car model:", error);
    return null;
  }
}
const LazyCarSlider = lazy(() => import("@/components/CarSlider"));
const LazyCarFeatures = lazy(() => import("@/components/CarFeatures"));
export default async function CarDetail({
  params,
}: {
  params: { model: string };
}) {
  const carModel = await fetchCarModel(params.model);

  if (!carModel) {
    return <div>Model not found</div>;
  }

  return (
    <div className="p-8 flex flex-col">
      <CarDetails
        photo={carModel.photo}
        name={carModel.name}
        title={carModel.title}
        description={carModel.description}
      />
      <div className="mt-12">
        <React.Suspense fallback={<div>Loading CarSlider...</div>}>
          <LazyCarSlider carModel={carModel} />
        </React.Suspense>
      </div>
      <React.Suspense fallback={<div>Loading CarFeatures...</div>}>
        <LazyCarFeatures features={carModel.model_features} />
      </React.Suspense>
    </div>
  );
}
