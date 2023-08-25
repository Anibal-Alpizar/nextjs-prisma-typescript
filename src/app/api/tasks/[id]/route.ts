import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const task = await prisma.task.findFirst({
    where: {
      id: +params.id,
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const data = await request.json();
  const task = await prisma.task.update({
    where: {
      id: +params.id,
    },
    data,
  });
  return NextResponse.json(task);
}

export async function DELETE(request: Request, { params }: { params: Params }) {
  const tasks = await prisma.task.delete({
    where: {
      id: +params.id,
    },
  });
  return NextResponse.json(tasks);
}
