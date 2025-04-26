const TitleHeader = ({ title, sub }) => {
    return (
      <div className="flex flex-col items-center gap-5">
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            {title}
          </h1>
          <p>{sub}</p>
      </div>
    );
  };

export default TitleHeader;