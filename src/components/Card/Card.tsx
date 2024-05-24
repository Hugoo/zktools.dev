interface Props {
    title: string;
    value: string;
}

const Card: React.FC<Props> = ({ title, value }) => {
    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
        <div className="p-4 md:p-5">
          <div className="flex items-center gap-x-2">
            <p className="text-xs uppercase tracking-wide text-gray-500">
             {title}
            </p>
          </div>
  
          <div className="mt-1 flex items-center gap-x-2">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
              {value}
            </h3>
          </div>
        </div>
      </div>
    );
};

export default Card;
