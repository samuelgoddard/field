export default function MetaText({ children, small }) {
  return (
    <span className={`block uppercase leading-none tracking-wider ${ small ? 'text-[10px]' : 'text-[12px]'}`}>{children}</span>
  )
}