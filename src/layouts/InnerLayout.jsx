import Breadcrumb from "../Components/BreadCrumb";

const InnerLayout = ({ children }) => {
  return (
    <div>
      <main>
        <Breadcrumb />
        {children}
      </main>
    </div>
  );
};

export default InnerLayout;