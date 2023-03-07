import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class CpuService {
    constructor(public powerService: PowerService) { }
    compute(a: number, b: number) {
        console.log("Drawing 10 Watts of power from Power service")
        this.powerService.supplyPower(10)
        return a + b
    }
}
