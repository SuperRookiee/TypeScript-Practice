interface MenuProps {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function Menu(props: MenuProps) {
    return(
        <div className="absolute bg-red-500 text-white w-32 h-32 z-50">
            menu
            <div onClick={()=>props.setShowMenu(false)} >
                닫기
            </div>

        </div>
    )
}

export default Menu;