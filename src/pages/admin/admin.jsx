import { AdminLayout } from "./layout/main-layout";
import { HeroAdmin } from "./layout/hero-admin";
import { MainAdmin } from "./layout/main_admin";
import "./admin.css";

export const Admin = () => {
  return <AdminLayout>
    <section className="admin_hero">
      <HeroAdmin/>
    </section>
    <section className="main_admin">
      <MainAdmin/>
    </section>
  </AdminLayout>;
};
