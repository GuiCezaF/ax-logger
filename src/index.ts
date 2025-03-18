import { Colors, Icons } from "./styles";

export class Logger {
  private showTimestamp: boolean;

  constructor(showTimestamp: boolean = true) {
    this.showTimestamp = showTimestamp;
  }

  private log(level: string, icon: Icons, message: string, color: Colors, data?: any) {
    const timestamp = this.showTimestamp ? `[${new Date().toLocaleTimeString()}]` : "";
    const logMessage = ` ${icon} ${color}[${level.toUpperCase()}] ${timestamp}${Colors.Reset}: ${message}\n`;

    if (data !== undefined) {
      process.stdout.write(logMessage, data);
    } else {
      process.stdout.write(logMessage);
    }
  }

  success(message: string) {
    this.log("success", Icons.success, message, Colors.Green);
  }

  info(message: string) {
    this.log("info",Icons.info, message, Colors.Cyan);
  }

  warning(message: string) {
    this.log("warning",Icons.warn, message, Colors.Yellow);
  }

  error(message: string, error: unknown) {
    const formatMessage = `message: ${message}, ${error}`
    this.log("error",Icons.error, formatMessage, Colors.Red);
  }

  debug(message: string, data?: any) {
    this.log("debug",Icons.debug, message, Colors.Blue, data);
  }
}

