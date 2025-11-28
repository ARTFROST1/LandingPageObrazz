import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsModalProps {
  children: React.ReactNode;
}

export function TermsModal({ children }: TermsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Условия использования
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <p className="text-xs text-muted-foreground/70">
              Последнее обновление: 29 ноября 2025 года
            </p>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                1. Принятие условий
              </h3>
              <p>
                Настоящие Условия использования (далее — «Условия») регулируют
                использование мобильного приложения OBRAZZ (далее — «Приложение»),
                разработанного FrostMoon Tech. Загружая, устанавливая или используя
                Приложение, вы соглашаетесь соблюдать данные Условия.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                2. Описание сервиса
              </h3>
              <p>
                OBRAZZ — это мобильное приложение для организации гардероба и
                создания образов с помощью искусственного интеллекта. Приложение
                предоставляет следующие возможности:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Загрузка и каталогизация фотографий одежды</li>
                <li>Автоматическое удаление фона с фотографий</li>
                <li>Создание образов в визуальном редакторе</li>
                <li>AI-рекомендации по сочетанию вещей</li>
                <li>Социальная лента для вдохновения</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                3. Регистрация и аккаунт
              </h3>
              <p>
                Для использования полного функционала Приложения может
                потребоваться регистрация. Вы обязуетесь:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Предоставлять достоверную информацию при регистрации</li>
                <li>Обеспечивать конфиденциальность данных своего аккаунта</li>
                <li>Немедленно уведомлять о несанкционированном доступе</li>
                <li>Нести ответственность за все действия под вашим аккаунтом</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                4. Пользовательский контент
              </h3>
              <p>
                Вы сохраняете все права на загружаемый контент (фотографии,
                образы). Загружая контент, вы предоставляете нам ограниченную
                лицензию на его использование для функционирования Приложения.
              </p>
              <p className="mt-2">Запрещается загружать контент, который:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Нарушает авторские права третьих лиц</li>
                <li>Содержит незаконный, оскорбительный материал</li>
                <li>Содержит вредоносный код</li>
                <li>Нарушает права других пользователей</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                5. Правила использования
              </h3>
              <p>При использовании Приложения запрещается:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Нарушать работу сервиса или серверов</li>
                <li>Использовать автоматизированные средства доступа</li>
                <li>Обходить технические ограничения</li>
                <li>Использовать Приложение для незаконных целей</li>
                <li>Передавать доступ к аккаунту третьим лицам</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                6. Подписка и платежи
              </h3>
              <p>
                Приложение может предлагать бесплатные и платные функции.
                Условия подписки:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Оплата производится через App Store / Google Play</li>
                <li>Подписка продлевается автоматически</li>
                <li>
                  Отмена подписки возможна в настройках магазина приложений
                </li>
                <li>Возврат средств осуществляется согласно политике магазина</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                7. Интеллектуальная собственность
              </h3>
              <p>
                Приложение, включая дизайн, код, логотипы и контент, является
                интеллектуальной собственностью FrostMoon Tech. Запрещается
                копирование, модификация или распространение любых элементов
                Приложения без письменного разрешения.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                8. Ограничение ответственности
              </h3>
              <p>
                Приложение предоставляется «как есть». Мы не гарантируем
                бесперебойную работу и не несём ответственности за:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Потерю данных пользователя</li>
                <li>Перерывы в работе сервиса</li>
                <li>Косвенные убытки от использования Приложения</li>
                <li>Действия третьих лиц</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                9. Прекращение использования
              </h3>
              <p>
                Мы оставляем за собой право приостановить или прекратить доступ
                к Приложению при нарушении данных Условий. Вы можете прекратить
                использование в любое время, удалив аккаунт и Приложение.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                10. Изменения условий
              </h3>
              <p>
                Мы можем изменять данные Условия. О существенных изменениях мы
                уведомим заблаговременно. Продолжение использования после
                изменений означает согласие с новой редакцией.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                11. Применимое право
              </h3>
              <p>
                Данные Условия регулируются законодательством Российской
                Федерации. Споры разрешаются путём переговоров или в судебном
                порядке.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                12. Контактная информация
              </h3>
              <p>По вопросам, связанным с Условиями, обращайтесь:</p>
              <ul className="list-none mt-2 space-y-1">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:frostmoontech@gmail.com"
                    className="text-foreground underline"
                  >
                    frostmoontech@gmail.com
                  </a>
                </li>
                <li>
                  Разработчик:{" "}
                  <a
                    href="https://frostmoon-tech.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline"
                  >
                    FrostMoon Tech
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
