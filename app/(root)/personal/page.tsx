import Personal from "@/components/Personal";
import ToggleSwitch from "@/components/ToggleSwitch";

const PersonalPage = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center py-10">
        <ToggleSwitch />
        <div>
          <Personal />
        </div>
      </div>
    </section>
  );
};

export default PersonalPage;
