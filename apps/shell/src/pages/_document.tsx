import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentProps,
} from 'next/document';
import {
  revalidate,
  FlushedChunks,
  flushChunks,
} from '@module-federation/nextjs-mf/utils';

interface ExtendedDocumentProps extends DocumentProps {
  chunks?: string[];
}

class CustomDocument extends Document<ExtendedDocumentProps> {
  static override async getInitialProps(ctx: DocumentContext) {
    if (!ctx.req?.url?.includes('_next')) {
      await revalidate().then((shouldReload) => {
        if (shouldReload) {
          ctx.res?.writeHead(302, { location: ctx.req?.url });
          ctx.res?.end();
        }
      });
    } else {
      ctx?.res?.on('finish', () => {
        revalidate();
      });
    }

    const initialProps = await Document.getInitialProps(ctx);
    const chunks = await flushChunks();

    return { ...initialProps, chunks };
  }

  override render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          <FlushedChunks chunks={(this.props as any).chunks} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
