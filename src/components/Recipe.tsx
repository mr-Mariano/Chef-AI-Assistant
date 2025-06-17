import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// Al inicio de Recipe.tsx

type Props = {
    recipe : string
}


const markdownComponents = {
    h2: (props: any) => (
        <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0" {...props} />
    ),
    p: (props: any) => (
        <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
    ),
    h4: (props: any) => (
        <h4 className="scroll-m-20 text-md md:text-xl font-semibold tracking-tight mt-4" {...props} />
    ),
    ul: (props: any) => (
        <ul className="text-xs md:text-md my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    ol: (props: any) => (
        <ol className="text-xs md:text-md my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    li: (props: any) => (
        <li className="mt-2" {...props} />
    ),
};

const Recipe = ({recipe} : Props) => {

    return (
        <div className="text-start w-full px-20 md:px-0 mb-16 pt-22">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0">
                Chef Cloude Recommends:
            </h2>
            <ReactMarkdown
                components={markdownComponents}
                remarkPlugins={[remarkGfm]}>
                {recipe}
            </ReactMarkdown>

        </div>
    )
}
export default Recipe
