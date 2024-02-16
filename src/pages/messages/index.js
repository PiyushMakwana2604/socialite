import React from 'react'
import MessageFeed from './componants/messageFeed'
import MessageSidebar from './componants/messageSidebar'
import { Helmet } from 'react-helmet'

function Messages() {
    return (
        <>
            <Helmet>
                <title>Socialite | Messages</title>
            </Helmet>
            <main id="site__main" className="2xl:ml-[--w-side]  xl:ml-[--w-side-sm] p-2.5 h-[calc(100vh-var(--m-top))] mt-[--m-top]">
                <div className="relative overflow-hidden border -m-2.5 dark:border-slate-700">
                    <div className="flex bg-white dark:bg-dark2">
                        <MessageSidebar />
                        <MessageFeed />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Messages