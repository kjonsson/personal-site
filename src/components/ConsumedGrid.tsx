"use client";

import Card from "../components/Card";

const ConsumedGrid = ({
  consumed,
}: {
  consumed: Array<{ image: string; title: string; link: string }>;
}) => {
  return (
    <div className="relative w-full h-screen px-2">
      <div className="h-screen overflow-y-scroll">
        <div className="pb-24 mb-24">
          <div className="py-5 select-none">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-5">
              {consumed.map((consume) => (
                <Card
                  image={consume.image}
                  title={consume.title}
                  subtitle={""}
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumedGrid;
