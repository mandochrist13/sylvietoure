import React from "react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div>
      <div className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-teal-600 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h5 color="blue-gray" className="mb-2">
          {title}
        </h5>
        <p className="px-8 font-normal !text-gray-500">{children}</p>
      </div>
    </div>
  );
}

export default SkillCard;
