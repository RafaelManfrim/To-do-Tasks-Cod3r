type SelectionProps = {
    selected?: boolean
}

export default function Selection(props: SelectionProps) {

    const selectStyle = 'w-8 h-8 rounded-full cursor-pointer border border-gray-400 border-solid '
    const selectGradient = 'bg-gradient-to-tr from-blue-600 to-purple-800 '
    const alignCenter = 'flex items-center justify-center '

    if(props.selected){
        return (
            <div className={selectStyle + selectGradient + alignCenter + "text-white"}>
                x
            </div>
        )
    } else {
        return <div className={selectStyle} />
    }
    
}