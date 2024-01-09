import { AiOutlinePhone, AiFillGithub } from "react-icons/ai";


export default function MyFooter() {
   
    return (
        <><footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 Noemi Desmarais
                    </span>

                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="tel:5142434627"
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 "
                        >
                            <AiOutlinePhone className="h-5 w-5 flex-none text-gray-400 hover:text-gray-900 " aria-hidden="true" />
                            (514) 243-4627
                        </a>

                        <a href="http://www.github.com/codemara"
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 "
                        >
                            <AiFillGithub className="h-5 w-5 flex-none text-gray-400 hover:text-gray-900 " aria-hidden="true" />
                            @codemara
                        </a>

                    </div>
                </div>
            </div>
        </footer></>
    )

}