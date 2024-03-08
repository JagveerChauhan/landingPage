import Script from "next/script"

export default function ThankYou()
{

    return(
        <>

            <Script id="thank_you">{`gtag('event', 'conversion', {'send_to': 'AW-11302632869/JHVFCIz99ZkZEKX7wY0q'});`}</Script>
            <div className="px-10 py-20 md:p-20 flex flex-col justify-between gap-16 bg-[url('/images/ThankYou.webp')] bg-cover h-full w-full bg-no-repeat overflow-hidden">
                <h1 className="text-5xl md:text-9xl text-white font-bold font-DM Sans text-center">Thank You</h1>
                <p className="text-white text-lg md:text-2xl font-medium font-DM Sans text-center">We have recieved your message and would like to thank you for writing to us. We will contact you as soon as possible.</p>
            </div>
        </>
    )
}
