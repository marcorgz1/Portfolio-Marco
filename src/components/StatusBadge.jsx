function StatusBadge () {
    return (
        <div className="flex items-center gap-2
            px-4 py-2 rounded-full
            bg-[#a6e3a1]/10
            border border-[#a6e3a1]/30
            text-[#a6e3a1] text-sm font-medium
            backdrop-blur-sm
            hover:bg-[#a6e3a1]/20
            cursor-pointer duration-300"
            animate={{ 
                y: [0, -12, 0]
            }}
            transition={{
                y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
        >

            <span className="bottom-1 right-1
                w-2 h-2 rounded-full bg-[#a6e3a1]
                animate-pulse"></span>
            Disponible

        </div>
    )
}

export default StatusBadge;
