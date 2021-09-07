export default function Header({ children }: any){
    return (
        <div className="flex h-1/3 bg-img-tasks bg-no-repeat bg-cover">
            <div className="flex flex-1 h-full bg-gradient-to-r from-purple-500 via-transparent to-yellow-600 justify-center items-center">
                {children}
            </div>
        </div>
    )
}