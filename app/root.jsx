import { Form, Outlet, LiveReload, Meta, Links, useLoaderData } from '@remix-run/react';
import stylesheet from '~/tailwind.css';

import { getTheme, setTheme } from '../app/models/theme.server';
import { redirect } from '@remix-run/node';

import ThemeSwitchButton from './components/ThemeSwitchButton';

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
    isDarkTheme: !!(data[0].theme === 'dark')
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

  const { isDarkTheme, themeId, currentTheme } = useLoaderData();

  console.log("App isDarkTheme: ",isDarkTheme);

  return (
    <div>
      <Document isDarkTheme={isDarkTheme}>
        <Layout isDarkTheme={isDarkTheme} themeId={themeId} currentTheme={currentTheme}>
          {process.env.NODE_ENV === 'development' 
            ? <LiveReload /> : null}
          <Outlet />
        </Layout> 
      </Document>
    </div>
  )
}

const Document = ({ children, title, isDarkTheme }) => {

  const themeClassName = isDarkTheme ? 'dark' : null;   // Adds 'dark' classname to root html element to enable Dark Mode or null for light mode

  return (
    <html lang='en' class={themeClassName}>
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

const Layout = ({ children, isDarkTheme, themeId, currentTheme }) => {

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between align-middle border-b-2 border-b-slate-300 p-3 dark:bg-black">
        <h1 className="font-gothamBold self-center tracking-widest text-2xl dark:text-orange-300">{'WEATHER APP'}</h1>
        <div className='m-0 self-center'>
          <Form method='post'>
            <input name={"themeMode"} value={currentTheme} hidden readOnly />
            <input name={"id"} value={themeId} hidden readOnly />
            <ThemeSwitchButton isDarkTheme={isDarkTheme} />
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
