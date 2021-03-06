import Head from 'next/head'

interface Props {
    children?: React.ReactNode
}

export default ({ children }: Props) => (
    <>
        <Head>
            <script
                src='https://kit.fontawesome.com/156885e294.js'
                crossOrigin='anonymous'
            ></script>
            <link
                rel='stylesheet'
                href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
                integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
                crossOrigin='anonymous'
            />
        </Head>
        <div className='main'>{children}</div>
        <style global jsx>
            {`
                html,
                body,
                #__next,
                .main {
                    height: 100%;
                }
            `}
        </style>
    </>
)
