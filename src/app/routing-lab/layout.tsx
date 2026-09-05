import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вложенный layout",
  description: "Это вложенный layout для изучения, после будет удален",
};

export default function RoutingLabLayout({
  children,
}: LayoutProps<"/routing-lab">) {
  return (
    <section>
      <h3>Вложенный layout</h3>
      {children}
    </section>
  );
}
