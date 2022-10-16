

const AuthBanner = ({ type }) => {
    let titleFirstPart;
    let titleSecondPart;
    let paragraph;
  
    if (type === "login") {
      titleFirstPart = "Welcome";
      titleSecondPart = "Back";
      paragraph =
        "Discover new events, get alerts about your favorite events - plus always-secure, effortless ticketing.";
    }
  
    if (type === "signup") {
      titleFirstPart = "You Have-";
      titleSecondPart = "Arrived, Events Await ";
      paragraph =
        "This is it. - find different live events, live alerts for your favorite events, always safe, secure ticketing.";
    }
  
    return (
      <div className="w-[400px] h-[100vh] bg-black-400 bg-url[url()]cover hidden relative lg:block">
        <div className="absolute w-100% top-0 left-0 w-full h-full bg-black/50 p-10 flex flex-col gap-y-[30px]">
          <h3 className="text-cyan-400 text-5xl font-bold flex flex-col gap-y-4">
            <span>{titleFirstPart}</span>
            <span>{titleSecondPart}</span>
          </h3>
  
          <p className="text-white">{paragraph}</p>
  
          <div className="w-[100px] h-[5px] bg-cyan-400"></div>
        </div>
      </div>
    );
  };
  
  export default AuthBanner;