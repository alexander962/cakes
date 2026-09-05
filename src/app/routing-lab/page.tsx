import Link from "next/link";

export default function RoutingLab() {
  return (
    <div>
      <h2>page routing-lab</h2>
      <p>Это чисто учебный маршрут</p>
      <Link href={'/'}>Перейти на главную страницу</Link>
    </div>
  );
}
