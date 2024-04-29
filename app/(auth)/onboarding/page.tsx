import { AccountProfile } from '@/components/forms/account-profile/AccountProfile';
import { currentUser } from '@clerk/nextjs';

async function Page() {
  const user = await currentUser();

  const userData = {
    id: user?.id ?? '',
    objectId: '',
    name: user?.firstName ? user.firstName : '',
    username: user?.lastName ? user.lastName : '',
    bio: '',
    image: user?.imageUrl ?? '',
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mb-9 mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads
      </p>
      <AccountProfile user={userData} btnTitle="" />
    </main>
  );
}

export default Page;
