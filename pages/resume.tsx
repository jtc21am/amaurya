import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';

export default function Resume(): JSX.Element {
  const resumeSrc =
    'https://onedrive.live.com/view.aspx?resid=B972E0CE7D8636BC!204&ithint=file%2cdocx&authkey=!AB8DGLgD4gbTQrs';

  return (
    <MainLayout>
      <PageSEO title={`Resume - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Resume
          </h1>
        </div>
        <div className="container py-5">
          <div className="p-4">
            <a href={resumeSrc} download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}


