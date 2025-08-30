const SkillTile = ({ name, Icon }) => {
  return (
    <div
      className="flex w-fit items-center cursor-pointer select-none gap-3"
    >
      <Icon className="size-10 md:grayscale hover:grayscale-0 hover:scale-110 transition-transform" />
      <p className="mt-2 text-sm text-gray-300">{name}</p>
    </div>
  )
}

export default SkillTile
