import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyModalProps {
  children: React.ReactNode;
}

export function PrivacyModal({ children }: PrivacyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Политика конфиденциальности
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <p className="text-xs text-muted-foreground/70">
              Последнее обновление: 29 ноября 2025 года
            </p>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                1. Общие положения
              </h3>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки
                и защиты персональных данных пользователей мобильного приложения
                OBRAZZ (далее — «Приложение»), разработанного командой FrostMoon Tech.
              </p>
              <p className="mt-2">
                Используя Приложение, вы соглашаетесь с условиями данной Политики.
                Если вы не согласны с условиями, пожалуйста, не используйте Приложение.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                2. Какие данные мы собираем
              </h3>
              <p>Мы можем собирать следующие категории данных:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <strong>Данные аккаунта:</strong> адрес электронной почты, имя
                  пользователя (при регистрации)
                </li>
                <li>
                  <strong>Контент пользователя:</strong> фотографии одежды,
                  созданные образы, настройки гардероба
                </li>
                <li>
                  <strong>Технические данные:</strong> тип устройства, версия ОС,
                  идентификатор устройства, данные о сбоях
                </li>
                <li>
                  <strong>Данные использования:</strong> статистика использования
                  функций приложения
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                3. Как мы используем данные
              </h3>
              <p>Собранные данные используются для:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Предоставления и улучшения функциональности Приложения</li>
                <li>Персонализации рекомендаций AI-стилиста</li>
                <li>Обеспечения безопасности и предотвращения мошенничества</li>
                <li>Коммуникации с пользователями (поддержка, уведомления)</li>
                <li>Анализа и улучшения качества сервиса</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                4. Хранение и защита данных
              </h3>
              <p>
                Мы применяем современные методы защиты данных, включая шифрование
                при передаче и хранении. Фотографии и образы хранятся в защищённом
                облачном хранилище. Доступ к данным имеют только авторизованные
                сотрудники в рамках исполнения служебных обязанностей.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                5. Передача данных третьим лицам
              </h3>
              <p>
                Мы не продаём и не передаём ваши персональные данные третьим лицам,
                за исключением следующих случаев:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>С вашего явного согласия</li>
                <li>Для выполнения требований законодательства</li>
                <li>
                  Поставщикам услуг (хостинг, аналитика) на условиях
                  конфиденциальности
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                6. Ваши права
              </h3>
              <p>Вы имеете право:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Запросить доступ к своим персональным данным</li>
                <li>Исправить неточные данные</li>
                <li>Удалить свой аккаунт и связанные данные</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
              <p className="mt-2">
                Для реализации этих прав свяжитесь с нами по адресу:{" "}
                <a
                  href="mailto:frostmoontech@gmail.com"
                  className="text-foreground underline"
                >
                  frostmoontech@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                7. Изменения в Политике
              </h3>
              <p>
                Мы можем обновлять данную Политику. О существенных изменениях мы
                уведомим через Приложение или по электронной почте. Продолжение
                использования Приложения после изменений означает согласие с новой
                редакцией Политики.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                8. Контактная информация
              </h3>
              <p>
                По вопросам, связанным с конфиденциальностью, обращайтесь:
              </p>
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
