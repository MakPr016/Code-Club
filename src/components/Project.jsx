import Tag from './Tag'
import Button from './Button'

const Project = ({
  title,
  desc,
  github,
  preview,
  tags = [],
  banner
}) => {
  return (
    <div className="card rounded-lg w-[94%] max-w-6xl mx-auto h-auto flex max-sm:flex-col">
      <div className="bg-amber-50 rounded-md flex items-center justify-center px-6 md:px-10 py-8 md:py-10
                      basis-1/2 max-sm:basis-[60%]">
        <div className="w-full max-w-[560px] aspect-[16/10] bg-white rounded-md border border-zinc-200 shadow-sm overflow-hidden flex items-center justify-center">
          <img
            src={banner}
            alt="Project preview"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="project-content-out basis-1/2 max-sm:basis-[40%] px-5 max-sm:px-2 py-8 max-sm:py-5 flex flex-col  gap-5 justify-between">
        <div className="project-info space-y-3 max-sm:space-y-4 text-[#ccc]">
          <h3 className="font-roboto text-xl max-sm:text-lg font-bold">{title}</h3>
          <p className="font-roboto text-sm max-sm:text-[12px]">
            {desc}
          </p>
          <div className="project-tags space-x-2 space-y-2">
            {tags.map((t,i) => (
                <Tag 
                    key={i} 
                    label={t.label}
                    icon={t.icon}
                    theme={t.theme}
                />
            ))}
          </div>
        </div>
        <div className="project-buttons space-x-3">
          {github ? <Button size="sm" text="github" caps={true} href={github} /> : null}
          {preview ? <Button size="sm" text="preview" caps={true} href={preview} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Project
