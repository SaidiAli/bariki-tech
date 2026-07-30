import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/data';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
    return Object.keys(servicesData).map((serviceId) => ({
        serviceId,
    }));
}

export const dynamicParams = false;

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ serviceId: string }>;
}) {
    const { serviceId } = await params;

    if (!servicesData[serviceId]) {
        notFound();
    }

    return <ServiceDetailClient serviceId={serviceId} />;
}
