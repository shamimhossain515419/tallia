import Faqs from "@/components/pages/faqs/Faqs";
async function getData() {
    let faqs = await (
        await fetch(
            // `${process.env.BASE_URL}/api/get-faqs/${process.env.GROUP_ID}`,
            `${process.env.BASE_URL}/api/get-faqs/${1}`,
            {
                next: { revalidate: 300 },
            }
        )
    ).json();

    return { faqs };
}
const page = async () => {
    const { faqs } = await getData();
    return (
        <>
            <Faqs faqs={faqs} />
        </>
    );
};

export default page;