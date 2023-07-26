import { Form, Outlet, LiveReload, Meta, Links, useLoaderData } from '@remix-run/react';
import stylesheet from '~/tailwind.css';

import { getTheme, setTheme } from '../app/models/theme.server';
import { redirect } from '@remix-run/node';

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

export const loader = async ({ params, request }) => {

  const data = await getTheme();

  return {
    themeId: Number(data[0].id),
    currentTheme: data[0].theme,
    isDarkMode: !!(data[0].theme === 'dark')
  }
}

export const action = async ({ params, request }) => {
  
  const formData = await request.formData();
  const id = Number(formData.get('id'));
  const currentTheme = formData.get('themeMode');

  let newTheme;

  if(currentTheme === 'dark') {
    newTheme = 'light'
  } else if (currentTheme === 'light') {
    newTheme = 'dark'
  } else {
    newTheme = 'light'
  }

  await setTheme(id, { id, theme: newTheme });

  return null
}

export default function App() {

  const { isDarkMode, themeId, currentTheme } = useLoaderData();

  console.log("App isDarkMode: ",isDarkMode);

  return (
    <div>
      <Document>
        <Layout isDarkMode={isDarkMode} themeId={themeId} currentTheme={currentTheme}>
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

const Layout = ({ children, isDarkMode, themeId, currentTheme }) => {

  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-gray-200 p-5">
        <h1 className="font-gothamBold tracking-widest text-2xl">{'WEATHER APP'}</h1>
        <div>
          <Form method='post'>
            <input name={"themeMode"} value={currentTheme} hidden readOnly />
            <input name={"id"} value={themeId} hidden readOnly />
            <button type='submit'>
              {isDarkMode 
                ? 'Switch to Light' 
                : 'Switch to Dark'}
            </button>
          </Form>
        </div>
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
