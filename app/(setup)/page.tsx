import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile';
import { redirect } from 'next/navigation';
import { InitialModal } from '@/components/modals/initial-modal';
const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          id: profile.id,
        },
      },
    },
  });
  if (server) {
    redirect(`/channels/${server.id}`);
  }
  return <InitialModal></InitialModal>;
};

export default SetupPage;
