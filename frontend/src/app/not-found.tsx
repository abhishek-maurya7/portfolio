export default function NotFound() {
  return (
    <main className="flex h-[calc(100vh-72px)] flex-col items-center justify-center text-center font-[system-ui,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji']">
      <div>
        <h1 className="border-border mr-5 inline-block border-r py-0 pr-5.75 pl-0 align-top text-2xl leading-12.25 font-medium">
          404
        </h1>
        <div className="inline-block">
          <h2 className="m-0 text-sm leading-12.25 font-normal">
            This page could not be found.
          </h2>
        </div>
      </div>
    </main>
  );
}
