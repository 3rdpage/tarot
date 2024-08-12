import { Button } from '@/app.components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const RootScreen = () => {
  return (
    <article className="text-center">
      <header className="sr-only">
        <h1>장타로 단타로</h1>
        <p>매일 제공되는 주식 및 코인 시장 분석을 타로 카드를 통해 예측합니다.</p>
        <p>투자의 흐름을 타로로 확인해보세요.</p>
      </header>
      <Image src="https://placecats.com/g/450/450" alt="장타로 단타로" width={450} height={450} />
      <Button size="lg" asChild>
        <Link href="/pick">타로 뽑기</Link>
      </Button>
    </article>
  );
};

export default RootScreen;
