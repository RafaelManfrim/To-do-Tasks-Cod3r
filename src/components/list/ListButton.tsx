type ListButtonProps = {
    selected?: boolean
    cls?: string
    children: any
    onClick: (e: any) => void
}

export default function ListButton(props: ListButtonProps){

    const isSelectedStyle = props.selected ? 'border-b-4 border-purple-400' : ''
    const classButton = props.cls !== undefined ? props.cls : ''

    const buttonStyle = 'text-gray-500 font-semibold hover:text-black focus:outline-none ' + isSelectedStyle + classButton

    return (
        <button onClick={props.onClick} className={buttonStyle}>{props.children}</button>
    )
}