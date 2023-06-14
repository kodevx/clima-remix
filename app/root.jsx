import { Outlet, LiveReload, Meta, Links, Link } from "@remix-run/react";
import stylesheet from '~/tailwind.css';

export const meta = () => {
  const title = 'A Weather App';
  const keywords = 'remix, javascript, tailwindcss';

  return [
    { title },
    { name: "description", content: "Welcome to Weather App!" },
  ];
};

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <div>
      <Document>
        <Layout>
          {process.env.NODE_ENV === 'development' 
            ? <LiveReload /> : null}
          <Outlet />
        </Layout> 
      </Document>
    </div>
  )
}

const Document = ({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <title>{title ? title : 'My Weather App'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}                                    
      </body>
    </html>
  )
}

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-gray-200 p-5">
        <h1>{'Weather App'}</h1>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export const ErrorBoundary = ({ error }) => {
  return (
    <>
      <Document>
        <Layout>
          <h1>Error</h1>
          <p>{error.message}</p>
        </Layout>
      </Document>
    </>
  )
}
