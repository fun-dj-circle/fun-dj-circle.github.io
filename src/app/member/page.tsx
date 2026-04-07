import Header from "@/components/header";
import PageHead from "@/components/pagehead";

export default function Member() {
  return (
    <div className="min-h-screen bg-white"> 
     <Header />
     <PageHead 
      RImageSrc="/sqstripe.svg"
      LImageSrc="/sqstripe.svg"
      title="サークル所属メンバー"
      subtitle="Member"
     />
    </div>
  );
}